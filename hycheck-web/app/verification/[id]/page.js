import VerifierClient from "./VerifierClient";

export default async function Page({ params }) {
  const { id } = await params; 
  return <VerifierClient id={id} />;
}
