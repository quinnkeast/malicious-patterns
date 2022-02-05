export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.BUTTONDOWN}`,
      },
      body: JSON.stringify(data),
    };

    console.log(requestOptions);
    const result = await fetch(
      "https://api.buttondown.email/v1/subscribers",
      requestOptions
    );

    console.log(result);
    if (result.status === 201) {
      res.status(201).json(result);
    } else {
      res.status(400).end();
    }
  } else {
    res.status(500).end();
  }
}
