import style from './page.module.scss';
export default function Home() {
  return(
    <main className={style.container}>
      <h1 className={style.title}>Hello World</h1>
      <p className={style.subtitle}>Minha primeira página Next</p>
    </main>
  );
};