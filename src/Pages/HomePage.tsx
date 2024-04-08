import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useNavigation } from "react-router-dom";

interface Users {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const HomePage: React.FC = () => {
  const [data, setData] = useState<Users[]>([]);
  const navigate = useNavigation();

  useEffect(() => {
    fetch("https://localhost:7059/home/users")
      .then((response) => {
        return response.json();
      })
      .then((data: Users[]) => {
        setData(data);
      })
      .catch(() => {
        console.log("Ошибка");
      });
  }, []);

  return (
    <div className="home-container">
      <div className="data-container">
        {data.map((users) => (
          <div className="user-block">
            <div className="users-text">{users.name}</div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
