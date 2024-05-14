import { Button } from "@/components/ui/button";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import axios from "axios";
import Dropzone from "@/components/Dropzone";
import { LandingHero } from "@/components/landing/landing-hero";

export default function Home() {
  async function useAction(formData: FormData) {
    "use server"
    const file = formData.get("image") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    try {
      // Send data to the server using Axios
      const response = await axios.post('http://127.0.0.1:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
          }
        });

      // Handle the response as needed (e.g., update UI with the prediction)
      const predictionResult = response.data;
      console.log('Prediction Result:', predictionResult);
      
      // Optionally, you can trigger a revalidation of the path
      revalidatePath('/');

    } catch (error) {
      console.error('Error submitting image:', error);
    }
  }
  return (
    <div className="h-full ">
      <LandingHero />
    </div>
   );

  // return (
  //   <main className="flex min-h-screen flex-col items-center p-12">
  //     <h1 className="text-5xl font-extrabold pb-16">Welcome to Heroeville</h1>
  //     {/* <form action={useAction} className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6">
  //       <p className="mb-6">
  //         <label htmlFor="image" className="block font-semibold text-sm mb-2">
  //           Select an Image to Upload
  //         </label>
  //         <input
  //           id="image"
  //           className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  //           type="file"
  //           name="image"
  //           required
  //         />
  //       </p>
  //       <Button>Submit</Button> */}
  //     {/* </form> */}
  //     <Dropzone />
  //   </main>
  // );
}
