import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import { getCookie, setCookie } from "cookie-js-api";
import styles from "../styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [nameCookie, setNameCookie] = useState("");
  const [valueCookie, setValueCookie] = useState("");
  const [valueFromBrowser, setValueFromBrowser] = useState("");
  const [opts, setOpts] = useState<Record<string, any>>();

  const onSetCookie = () => {
    setCookie(nameCookie, valueCookie, opts);
  };

  const onGetCookie = () => {
    setValueFromBrowser(getCookie(nameCookie));
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <p>Cookie name:</p>
        <input type="text" onChange={(e) => setNameCookie(e.target.value)} />
        <p>Cookie value:</p>
        <input type="text" onChange={(e) => setValueCookie(e.target.value)} />
        <p>Cookie path:</p>
        <input
          type="text"
          onChange={(e) => setOpts({ ...opts, path: e.target.value })}
        />
        <p>Cookie domain:</p>
        <input
          type="text"
          onChange={(e) => setOpts({ ...opts, domain: e.target.value })}
        />
        <p>Cookie expires:</p>
        <input
          type="text"
          onChange={(e) =>
            setOpts({
              ...opts,
              expires: e.target.value.length
                ? new Date(e.target.value)
                : undefined,
            })
          }
        />
        <p>Cookie max age:</p>
        <input
          type="text"
          onChange={(e) =>
            setOpts({
              ...opts,
              maxAge: e.target.value.length
                ? Number(e.target.value)
                : undefined,
            })
          }
        />
        <p>Cookie httpOnly:</p>
        <input
          type="text"
          onChange={(e) => setOpts({ ...opts, httpOnly: e.target.value })}
        />
        <p>Cookie secure:</p>
        <input
          type="text"
          onChange={(e) => setOpts({ ...opts, secure: e.target.value })}
        />
        <p>Cookie partitioned:</p>
        <input
          type="text"
          onChange={(e) => setOpts({ ...opts, partitioned: e.target.value })}
        />
        <p>Cookie priority:</p>
        <input
          type="text"
          onChange={(e) => setOpts({ ...opts, priority: e.target.value })}
        />
        <p>Cookie sameSite:</p>
        <input
          type="text"
          onChange={(e) =>
            setOpts({
              ...opts,
              sameSite:
                e.target.value === "true"
                  ? Boolean(e.target.value)
                  : e.target.value,
            })
          }
        />
        <p>Cookie numberOfDays:</p>
        <input
          type="text"
          onChange={(e) =>
            setOpts({
              ...opts,
              numberOfDays: e.target.value.length ? e.target.value : undefined,
            })
          }
        />
        <button className={styles.setCookieBtn} onClick={onSetCookie}>
          Set cookie
        </button>
        <p>Cookie value from browser cookie api:</p>
        <p>{valueFromBrowser}</p>
        <button onClick={onGetCookie}>Get cookie</button>
      </div>
    </>
  );
}
