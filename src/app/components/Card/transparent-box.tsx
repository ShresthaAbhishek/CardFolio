import styles from "./transparent-box.module.css"

export function TransparentBox() {
  return (
    <div className={styles.transparentBox}>
      <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
      <p className="mb-4">
        This space can be used for displaying more details about the selected card, or for any other relevant
        information youd like to showcase.
      </p>
      <p>Feel free to customize this content based on your specific needs and design preferences.</p>
    </div>
  )
}
