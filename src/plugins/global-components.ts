import type { App } from "vue";

const icons = import.meta.glob("../components/icons/**/*.vue", {
  eager: true,
});

export default function registerGlobalComponents(app: App) {
  for (const path in icons) {
    const component: any = (icons[path] as any).default;

    if (!component) continue;

    const fileName = path.split("/").pop()?.replace(".vue", "") || "";
    const kebabName = fileName
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase();

    const prefixedName = `icon-${kebabName}`;

    app.component(prefixedName, component);
  }
}
