import "./styles.css";

interface InputPropsType {
  placeholder: string;
  name: string;
  label: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  value?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
  startIcon?: string;
  endIcon?: string;
  multiline?: boolean;
  row?: number;
}

const Input = ({
  placeholder,
  name,
  label,
  error = false,
  disabled = false,
  helperText,
  value,
  size = "md",
  fullWidth = false,
  startIcon,
  endIcon,
  multiline,
  row,
}: InputPropsType): JSX.Element => {
  if (multiline)
    return (
      <div className="input-container" data-full-width={fullWidth}>
        <textarea
          className="textarea"
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          rows={row}
        >
          {value}
        </textarea>
      </div>
    );

  return (
    <div className="input-container" data-full-width={fullWidth}>
      <input
        className="input"
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        data-error={error}
        data-size={size}
        data-start-icon={Boolean(startIcon)}
      />
      {startIcon && (
        <span className="material-symbols-outlined md-dark mr-2 start-icon">
          {startIcon}
        </span>
      )}
      {endIcon && (
        <span className="material-symbols-outlined md-dark mr-2 end-icon">
          {endIcon}
        </span>
      )}
      {helperText && <p className="helper-text">{helperText}</p>}
      <label htmlFor={name} className="label" data-error={error}>
        {label}
      </label>
    </div>
  );
};

export default Input;
