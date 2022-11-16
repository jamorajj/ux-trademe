import create from "zustand";

type ThemeState = {
  theme: string;
  toggleTheme: () => void;
  uiType: string;
  toggleUI: () => void;
};

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: "winter",
  uiType: "more",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "winter" ? "dark" : "winter"
    })),
  toggleUI: () =>
    set((state) => ({
      uiType: state.uiType === "more" ? "compact" : "more"
    }))
}));
