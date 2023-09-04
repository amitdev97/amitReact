import { Stack } from "@mui/material";
import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(props: any) {

  return (
    <Stack>
      {props.data.map((item: any) => (
        <Stack mt={1} key={item.id}>
          <ExpenseItem expense={item}/>
        </Stack>
      ))}
    </Stack>
  );
}

export default Expenses;

