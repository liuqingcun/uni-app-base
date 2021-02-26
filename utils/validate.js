// import {func} from "@/utils/validate.js"
export function isPhone(phone) {
	const reg = /^1[3456789]\d{9}$/;
	return reg.test(phone)
}
