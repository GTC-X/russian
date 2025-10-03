import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { RiLockPasswordLine, RiUserLocationLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import useCountriesDetails from "@/context/useCountriesDetails";
import { useLocationDetail } from "@/context/useLocationDetail";
import { toast } from "react-toastify";


const MainForm = () => {
    const t = useTranslations("accounts.accountForm");
  const locale = useLocale();
  const { countryData } = useLocationDetail();
  const { countryList } = useCountriesDetails(locale);
  const [showOtp, setShowOtp] = useState(false)
  const [loading, setLoading] = useState(false);
 const [loadingOTP, setLoadingOTP] = useState(false);

 const platforms = [
  // { id: 1, name: "ECN Demo Account", value: "demo\\webECN.hedged" },
  { id: 1, name: t("mt5Account"), value: "demo\\web.hedged" },
];

  useEffect(() => {
    if (countryData?.country) {
      const filterData = countryList.find((item) => item?.code === countryData.country);
      formik.setFieldValue("country", filterData ? filterData?.nameInEnglish : "");
    }
  }, [countryData?.country, countryList]);

  const [storedOtp, setStoredOtp] = useState("")
  const [state, setState] = useState({
    verifed: false
  })


  const sendVerificationCode = () => {
    setLoadingOTP(true)
    axios.post(`/api/otp-smtp`, {
      email: formik?.values?.email,
    }).then(res => {
      setShowOtp(true)
      setStoredOtp(res?.data?.message)
      toast.success(t("sent"));

    }).catch(err => {
      setShowOtp(false)
    }).finally(() => {
      setLoadingOTP(false)
    })
  }

  const verifyEmailOtp = async () => {
    if (formik?.values?.otp === storedOtp) {
       toast.success(t("verified"));
      setState(st => ({
        ...st,
        verifed: true
      }))
    }
    else {
      toast.error(t("error1"));

    }
  }

  const generatePassword = (length = 12) => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const special = "!@#$%^&*";

    const all = lower + upper + number + special;

    // Ensure at least one of each type
    const password = [
      lower[Math.floor(Math.random() * lower.length)],
      upper[Math.floor(Math.random() * upper.length)],
      number[Math.floor(Math.random() * number.length)],
      special[Math.floor(Math.random() * special.length)],
    ];

    // Fill the rest with random chars
    for (let i = password.length; i < length; i++) {
      password.push(all[Math.floor(Math.random() * all.length)]);
    }

    // Shuffle to avoid predictable positions
    return password.sort(() => Math.random() - 0.5).join('');
  };

  const formik = useFormik({
    initialValues: {
      nickname: "",
      email: "",
      phone: "",
      password: generatePassword(),
      invest_password: generatePassword(),
      confirm_password: "",
      country: "",
      /* platform: "", */
      otp: "",
      terms: false,
    },
 validationSchema: Yup.object({
  nickname: Yup.string()
    .required(t("error.firstName")),
  email: Yup.string()
    .email("Invalid email address") // Optional: add t("error.email") if you want
    .required(t("error.email")),
  phone: Yup.string()
    .required(t("error.phone")),
  country: Yup.string()
    .required(t("error.country")),
  otp: Yup.string()
    .length(6, "OTP must be 6 digits") // you can translate this too if needed
    .required("OTP is required"),
  terms: Yup.bool()
    .oneOf([true], t("error.termOfService")),
}),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'formSubmission',
          formName: 'Form', // optional metadata
        });
        const payloadForm = {
          first_name: formik?.values?.nickname,
          phone: formik?.values?.phone,
          email: formik?.values?.email,
          password: `${formik?.values?.password}`,
          company: "no",
          country: formik?.values?.country,
          group: formik?.values?.platform,
          invest_password: `${formik?.values?.invest_password}`
        }
        await axios.post("https://hooks.zapier.com/hooks/catch/16420445/3ajp4wk/", JSON.stringify(values));

        axios.post(`/api/mt5-server`, payloadForm).then(res => {
          console.log({ res })
          if (res?.data?.success) {
            toast.success(res?.data?.message)
            formik.resetForm()
            setShowOtp(false)
            // window.location.href = "/thank-you";
            axios.post(`/api/mt5-completion-mail`, {
              name: formik?.values?.nickname,
              phone: formik?.values?.phone,
              email: formik?.values?.email,
              password: formik?.values?.password,
              user: res?.data?.data?.user,
              invest_password: formik?.values?.invest_password,
              server_name: formik?.values?.platform,
            }).then(res => {
              toast.success(res?.data?.message)
              window.location.href = `/${locale}/thank-you`;
            }).catch(err => {
              toast.success(err?.data?.message)
            }).finally(() => {
              setLoading(false)
            })
          } else {
            toast.error(res?.data?.message)
          }
        }).catch(err => {
          toast.success(err?.data?.message)
        }).finally(() => {
          setLoading(false)

        })
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
  });

  console.log({ formik })

  const boxStyle = {
    background: "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
    borderRadius: "8px",
  };


  return (
    <section className="demo-account">
      <div className="demo">
        <div className="relative py-[1px] px-[1px]" style={boxStyle}>
          <h2 className="text-center py-4 bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-t-xl text-lg  text-white">{t("demoHeading")}</h2>
        </div>

        <div className="relative">
          <form onSubmit={formik.handleSubmit} className="bg-white relative text-gray-700 rounded-b-xl  p-4 mx-auto">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 gap-4 mb-3">
              <div className="relative">
                <RiUserLocationLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  className={`w-full px-4 bg-white py-3 pl-9 border ${formik.touched.nickname && formik.errors.nickname ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder={t("firstName")}
                  {...formik.getFieldProps("nickname")}
                />
                {formik.touched.nickname && formik.errors.nickname && (
                  <p className="text-red-500 text-sm">{formik.errors.nickname}</p>
                )}
              </div>
              <div className="relative">
                <CiMail className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder={t("email")}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
                <div className="absolute top-2 bg-primary right-3 rounded-md cursor-pointer text-white  py-1.5 px-2"
                  onClick={() => {
                    sendVerificationCode()
                  }}
                >
                  {loadingOTP ? t("sending") : t("getCode")}
                </div>
              </div>
            </div>
            {showOtp && !state.verifed &&
              <div className="grid grid-cols-1 gap-2 mb-4">
                <div />
                <div className=" flex items-end gap-1">
                  <div>
                    <p className="mb-1">{t("otpSend")}</p>
                    <OtpInput
                      value={formik.values.otp}
                      onChange={(otp) => formik.setFieldValue("otp", otp)}
                      numInputs={6}
                      containerStyle={{
                        justifyContent: 'space-around',
                        alignItems: "center",
                        gap: "5px"
                      }}
                      renderInput={(props) => <input {...props} />}
                      isInputNum
                      inputStyle={{
                        borderRadius: '5px',
                        paddingBottom: '8px',
                        paddingTop: "8px",
                        width: "20%",
                        backgroundColor: "#f3f4f6",
                        color: "#000",
                        fontWeight: "700",
                        outlineColor: '#f9c617',
                        border: formik.touched.otp && formik.errors.otp ? "1px solid red" : "1px solid gray",
                      }}

                    />
                    {formik.touched.otp && formik.errors.otp && (
                      <p className="text-red-500 text-sm mt-2">{formik.errors.otp}</p>
                    )}
                  </div>
                  <div>
                    <button disabled={state?.verifed == true} className=" bg-primary whitespace-pre right-3 rounded-md cursor-pointer text-white  py-2 px-2"
                      onClick={() => {
                        verifyEmailOtp()
                      }}
                    >
                      
                      {t("verifyOTP")}
                    </button>
                  </div>
                </div>
              </div>
            }

            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="relative">
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="AE"
                  value={formik.values.phone}
                  onChange={(phone) => formik.setFieldValue("phone", phone)}
                  className={`w-full px-4 py-3 border ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                )}
              </div>
              <div className="relative">
                <MdManageAccounts className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <select
                  className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.platform && formik.errors.platform ? "border-red-500" : "border-gray-300"} rounded-lg text-gray-700`}
                  {...formik.getFieldProps("platform")}
                >
                  <option value="">{t("accountType")}</option>
                  {platforms.map((item) => (
                    <option key={item.id} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {formik.touched.platform && formik.errors.platform && (
                  <p className="text-red-500 text-sm">{formik.errors.platform}</p>
                )}
              </div>
            </div>

            {/* Password & Confirm Password */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <RiLockPasswordLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  className={`w-full px-4 bg-white py-3 pl-9 border ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">{formik.errors.password}</p>
                )}
              </div>
              <div className="relative">
                <RiLockPasswordLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.confirm_password && formik.errors.confirm_password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder="Confirm Password"
                  {...formik.getFieldProps("confirm_password")}
                />
                {formik.touched.confirm_password && formik.errors.confirm_password && (
                  <p className="text-red-500 text-sm">{formik.errors.confirm_password}</p>
                )}
              </div>
            </div> */}

            <div className="relative mb-4">
              <GiWorld className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
              <select
                className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.country && formik.errors.country ? "border-red-500" : "border-gray-300"} rounded-lg text-gray-700`}
                {...formik.getFieldProps("country")}
              >
                <option value="">{t("accountType")}</option>
                {countryList.map((item) => (
                  <option key={item?.code} value={item?.nameInEnglish}>
                    {item?.name}
                  </option>
                ))}
              </select>
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500 text-sm">{formik.errors.country}</p>
              )}
            </div>
            <div>
              <label
                className={`block text-sm pb-2 ${formik.touched.terms && formik.errors.terms
                  ? "text-red-500"
                  : ""
                  }`}
                htmlFor="terms"
              >
                {formik.touched.terms && formik.errors.terms
                  ? formik.errors.terms
                  : t("termOfService")}
              </label>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="checked"
                  className="h-5 w-5"
                />
                <p className="inline px-3 text-[10px] text-primary">
                  {t("termText")}<a className="text-secondary\" href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf"> {t("termText2")}</a>; (2)  {t("termText3")}.
                </p>
              </div>
            </div>


            {/* Submit Button */}
            <div className="text-center mt-3">
              <button disabled={state?.verifed == false} type="submit" className="bg-primary text-white font-semibold py-1 px-8 rounded-full text-lg">
                {loading ? t("sending") : t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainForm;