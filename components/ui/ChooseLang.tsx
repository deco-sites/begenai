import Icon from "../ui/Icon.tsx";
import { useSignal } from "@preact/signals";

function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  const existingCookie = getCookie(cname);
  if (existingCookie) {
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  } else {
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }
}

function getCookie(cname: string): string | null {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
}

export default function ChooseLang() {
  const dropdownVisible = useSignal(false);

  const handleChangeLang = (lang: string) => {
    setCookie("begen-lang", lang, 365);
    globalThis?.location.reload();
  };

  return (
    <div class="relative">
      <button
        aria-label="Botão de seleção de idioma"
        class="border-none bg-transparent outline-none flex items-center gap-2 cursor-pointer"
        onClick={() => (dropdownVisible.value = !dropdownVisible.value)}
      >
        <Icon id="Globe" height={20} width={20} />
        <Icon class="hidden md:block" id="ChevronDown" strokeWidth={2} size={12} />
      </button>
      {dropdownVisible.value && (
        <div class="flex flex-col gap-2 absolute top-full left-0 bg-white w-24 p-5 mt-2 rounded-md drop-shadow-sm">
          <button
            class="border-none outline-none text-accent text-base font-medium bg-transparent cursor-pointer"
            onClick={() => handleChangeLang("pt-BR")}
          >
            pt-BR
          </button>
          <button
            class="border-none outline-none text-accent text-base font-medium bg-transparent cursor-pointer"
            onClick={() => handleChangeLang("en")}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
}