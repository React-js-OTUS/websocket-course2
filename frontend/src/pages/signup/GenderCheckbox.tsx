import styles from "./SignUp.module.scss";

type GenderCheckboxProps = {
  onCheckboxChange: (gender: string) => void;
  selectedGender: string;
};

const GenderCheckbox = ({
  onCheckboxChange,
  selectedGender,
}: GenderCheckboxProps) => {
  return (
    <div className={styles.checkboxContainer}>
      <div className={styles.formControl}>
        <label className={styles.label}>
          <span className={styles.labelText}>Male</span>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className={styles.formControl}>
        <label className={styles.label}>
          <span className={styles.labelText}>Female</span>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
