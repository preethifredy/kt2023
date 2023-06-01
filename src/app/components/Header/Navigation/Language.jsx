import { Form } from "react-bootstrap";

const languages = [
  {
    key: "en",
    label: "EN",
  },
  {
    key: "fr",
    label: "FR",
  },
  {
    key: "esp",
    label: "ESP",
  },
];

const Language = () => {
  return (
    <>
    <div className="lang-block lang-block-dark">
      <Form.Select className="dropdown-lang border-0 bg-transparent text-dark">
        {languages.map((lang, key) => (
          <option key={key} value={lang.key} className="text-dark">
            {lang.label}
          </option>
        ))}
      </Form.Select>
    </div>
    </>
  )
}

export default Language
