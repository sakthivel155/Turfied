import { useState ,useRef, useEffect} from "react"

const OtpInput = ({ length = 4, onOtpSubmit }) => {
  const [otpInputs, setOtpInputs] = useState(new Array(length).fill(""));
  const inputRefs = useRef([])

  useEffect(() => {
    if (inputRefs.current[0]) {
        inputRefs.current[0].focus()
      }
    },[])

  const handleOtpInputsChanges = (index, e) => { 
    const value = e.target.value;

    //the given input are not a number not store anything
    if (isNaN(value)) {
      return;
    } 
    //curent Array values store in new array 
    const newOtp = [...otpInputs]
    
    //allow only one input value
      newOtp[index] = value.substring(value.length - 1)
      setOtpInputs(newOtp);

      //move to next input if the current field are filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
      }
  }
  const handleOtpInputsKeyDown = (index, e) => {

    //when click backspace key to focus on previous input field
        if (e.key === 'Backspace' && !otpInputs[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
          }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedOtp = otpInputs.join("")
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp)
    } else {
      alert("Enter valid OTP")
    }
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="flex justify-center gap-2 my-5">
        {otpInputs.map((value, index) =>{
          return <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => { handleOtpInputsChanges(index, e) }}
            onKeyDown={(e) => { handleOtpInputsKeyDown(index, e) }}
            className="w-10 border-[2px] rounded h-10 text-center"
            ref={(input) => (inputRefs.current[index] = input)}
          />
        })}
      </div>
      <button type="submit" className="font-semibold text-white bg-[#1AB65C] w-full py-3 rounded-md mb-6 hover:bg-[#159c4d] transition-colors duration-200">
        Submit
      </button>
    </form>
  )
}

export default OtpInput