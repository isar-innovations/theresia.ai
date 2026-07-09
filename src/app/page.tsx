import { redirect } from "next/navigation";
import { localizedPath, defaultLocale } from "@/lib/i18n";

export default function RootPage() {
  redirect(localizedPath(defaultLocale));
}
