import { SiteClient } from "datocms-client";

export default async function (req, res) {
  if (req.method === "POST") {
    const TOKEN = "13df01b97e232a2e64d5c61e6cbadf";
    const client = new SiteClient(TOKEN);

    const record = await client.items.create({
      itemType: "967585", // model ID
      ...req.body,
      //   title: "Comunidade de Teste",
      //   imageUrl: "https://api.github.com/felipechung.png",
      //   creatorSlug: "felipechung",
    });

    res.json({
      record: record,
    });
    return;
  }
}
