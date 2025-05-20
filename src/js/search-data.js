import airtable from "airtable";

const token =
  "patDamBuCdI3HBGdA.16caa5fd1b0ef25bbeba20f0d5924e2363f34f4e0a72076c3a455b8f8221502f";

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: token,
});
var base = airtable.base("app0SbSGAsaSMFxfV");

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = [];

    base("Table 1")
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields["Title"],
            tags: record.fields["Tags"],
            image: record.fields["Image"],
            url: record.fields["URL"],
          });
        });

        resolve(content);
      });
  });
}

export { getPostTeasers };
