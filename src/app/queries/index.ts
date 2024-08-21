import { db } from "@/lib/db";

export default  async function GetImages() {
  const img=await db.postImage.findMany({})
  return img
}
