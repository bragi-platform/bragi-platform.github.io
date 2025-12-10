import { RedirectType, redirect } from "next/navigation";

export default function NotFound() {
	redirect("/home", RedirectType.replace);
}
