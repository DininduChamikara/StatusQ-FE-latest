export default function formatPhoneNumber(phoneNumber) {
  let formattedPhoneNumber;
  if (typeof phoneNumber === "number") {
    formattedPhoneNumber = phoneNumber.toString();
  } else if (typeof phoneNumber === "string") {
    formattedPhoneNumber = phoneNumber;
  } else throw new Error("Invalid phone number");

  const length = formattedPhoneNumber.length;

  console.warn("length ", length);

  switch (length) {
    case 11:
      if (formattedPhoneNumber.substring(0, 2) === "94")
        return formattedPhoneNumber;
      else throw new Error("Invalid phone number");
    case 13:
      if (formattedPhoneNumber.substring(0, 3) === " +94") {
        formattedPhoneNumber = formattedPhoneNumber.split("");
        formattedPhoneNumber.shift();
        return formattedPhoneNumber.join("");
      } else throw new Error("Invalid phone number");
    case 10:
      if (formattedPhoneNumber[0] !== "0")
        throw new Error("Invalid phone number");

      formattedPhoneNumber = formattedPhoneNumber.split("");
      formattedPhoneNumber[0] = "94";
      return formattedPhoneNumber.join("");
    case 9:
      formattedPhoneNumber = formattedPhoneNumber.split("");
      formattedPhoneNumber.unshift("94");
      return formattedPhoneNumber.join("");
    default:
      throw new Error("Invalid phone number");
  }

  // if (length === 12) {
  //   if (formattedPhoneNumber.substring(0, 2) === "94")
  //     return formattedPhoneNumber;
  //   else throw new Error("Invalid phone number");
  // } else if (length === 13) {
  //   if (formattedPhoneNumber.substring(0, 3) === " +94") {
  //     formattedPhoneNumber = formattedPhoneNumber.split("");
  //     formattedPhoneNumber.unshift("94");
  //     return formattedPhoneNumber.join("");
  //   } else throw new Error("Invalid phone number");
  // } else if (length === 10) {
  //   if (formattedPhoneNumber[0] !== "0")
  //     throw new Error("Invalid phone number");

  //   formattedPhoneNumber = formattedPhoneNumber.split("");
  //   formattedPhoneNumber[0] = "94";
  //   return formattedPhoneNumber.join("");
  // } else if (length === 9) {
  //   formattedPhoneNumber = formattedPhoneNumber.split("");
  //   formattedPhoneNumber.unshift("94");
  //   return formattedPhoneNumber.join("");
  // } else throw new Error("Invalid phone number");
}
