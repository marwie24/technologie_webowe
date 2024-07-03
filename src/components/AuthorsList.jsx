import '../style.css';

export const AuthorsList = ({ authors = [], onDelete }) => (
    <table class="table-container" >
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author.id}>
            <td>{author.name}</td>
            <td>{author.surname}</td>
            <td>
              <button class="delete" onClick={() => onDelete(author.id)}>Delete</button>
              <button class="edit">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );