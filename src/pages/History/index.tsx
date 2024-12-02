import { HistoryContainer, HistoryList } from "./styles";

export function History() {
    return(
        <HistoryContainer>
            <h1>Meu histórico</h1>
            <HistoryList>
                <table>
                    <thead>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 1 semana</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 1 semana</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 1 semana</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 1 semana</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 1 semana</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa 1</td>
                            <td>20 min</td>
                            <td>Há 1 semana</td>
                            <td>Concluído</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}
