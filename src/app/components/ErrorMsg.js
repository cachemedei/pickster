import Link from "next/link";

export default function ErrorMsg({message}) {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <h1>Oops, something went wrong</h1>
            <Link href={'/'}>Head Back</Link>
        </main>
    );
}
