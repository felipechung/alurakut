import { SiteClient } from "datocms-client";

export default async function (req, res) {
  const TOKEN = "13df01b97e232a2e64d5c61e6cbadf";
  const client = new SiteClient(TOKEN);

  res.json({
    dados: "Algum dado qualquer",
  });
}
