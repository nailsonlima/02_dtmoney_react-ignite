import ReactDOM from 'react-dom/client';
import { Model, createServer } from 'miragejs'
import { App } from './App';
import { transitions } from 'polished';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de WebSite',
          type: 'deposit',
          category: 'Dev',
          amount: 600,
          createdAt: new Date('2024-02-12 09:25:12')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2024-02-14 14:32:47')
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
    }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);