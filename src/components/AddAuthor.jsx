import '../style.css'; 
export const AddAuthor = ({ onAdd }) => (
  <div>
    <h1 class="title">Add new author</h1>
    <fieldset>
      <form onSubmit={onAdd}>
        <label className="nazwa" htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter author's name" />

        <label className="nazwa" htmlFor="surname">Surname</label>
        <input type="text" id="surname" name="surname" placeholder="Enter author's surname" />
  
        <button class="submit">Add</button>
      </form>
    </fieldset>
  </div>
);