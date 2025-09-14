import type { App } from "vue";

export default function registerGlobalComponents(app: App) {
  const _icons = import.meta.glob("../components/icons/**/*.vue", {
    eager: true,
  });
  for (const path in _icons) {
    const component: any = (_icons[path] as any).default;

    if (!component) continue;

    const fileName = path.split("/").pop()?.replace(".vue", "") || "";
    const kebabName = fileName
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase();

    const prefixedName = `icon-${kebabName}`;

    app.component(prefixedName, component);
  }
}
