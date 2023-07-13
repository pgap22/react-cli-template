import styles from "src/styles/index_page.module.css"

const Index = () => {
  return (
    <main className="flex flex-col items-center gap-2">
     <h1 className="font-bold text-3xl p-6">Welcome to React !</h1>
     <button className={styles.button}>You can still use .css !</button>
    </main>
  )
}

export default Index