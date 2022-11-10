import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}
.one_day_card {
    background: ${({ theme }) => theme.cards};
    color: ${({ theme }) => theme.color};
  }

.this_day, .day_info, .card_card_card{
    background: ${({ theme }) => theme.day};
}
.name_info_info, .this_time, .this_city{
    color: ${({ theme }) => theme.daytext};
}
.input{
    background: ${({ theme }) => theme.input};
}
.button{
    background: ${({ theme }) => theme.button};

}

`;
