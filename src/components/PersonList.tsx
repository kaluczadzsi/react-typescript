type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = ({ names }: PersonListProps) => {
  return (
    <ul>
      {names.map((name) => (
        <li key={name.first}>
          {name.first} {name.last}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
