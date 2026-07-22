// Item images are uploaded to a third-party object bucket (BUCKET_URL / BUCKET_KEY in env).
export async function uploadImage(file: Blob, name: string) {
  const res = await fetch(`${process.env.BUCKET_URL}/${name}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${process.env.BUCKET_KEY}` },
    body: file,
  });
  if (!res.ok) throw new Error("upload failed");
  return `${process.env.BUCKET_URL}/${name}`;
}
