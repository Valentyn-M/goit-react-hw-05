import { Field, Form, Formik } from "formik"
import s from "./SearchBar.module.css"
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ handleSetQuery }) => {

	const initialValues = {
		query: "",
	}

	const handleSubmit = (values) => {
		// Якщо текстове поле порожнє
		if (values.query === "") {
			// Бібліотека React Hot Toast
			toast.error("You must enter text to search for images")
			return;
		}
		handleSetQuery(values.query);
	}

	return (
		<div>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className={s.form}>
					<Field className={s.input}
						name="query"
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search for a movie"
					>
					</Field>
					<button className={s.btn} type="submit" aria-label="Search">Search</button>
				</Form>
			</Formik>
			<Toaster position="top-right" />
		</div>
	)
}

export default SearchBar
