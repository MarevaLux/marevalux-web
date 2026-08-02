import { requireTeamSession } from "../auth";

export default async function PanelLayout({ children }) {
  await requireTeamSession();
  return children;
}
