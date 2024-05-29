import { View, Text } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'

const Balance = () => {
    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([9, 10, 11]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
        numberOfItemsPerPageList[0]
      );
    
    const [items] = React.useState([
    {
        key: 1,
        name: 'Alliwance',
        balance: 600,
        date: '09-09-01',
    },
    {
        key: 2,
        name: 'Allowance',
        balance: 500,
        date: '09-09-01',
    },
    {
        key: 3,
        name: 'Toga',
        balance: 630,
        date: '09-09-01',
    },
    {
        key: 4,
        name: 'Allowance',
        balance: 500,
        date: '09-09-01',
    },
    {
        key: 5,
        name: 'Food',
        balance: 100,
        date: '09-09-01',
    },
    {
        key: 6,
        name: 'Food',
        balance: 100,
        date: '09-09-01',
    },
    {
        key: 7,
        name: 'Food',
        balance: 100,
        date: '09-09-01',
    },
    {
        key: 8,
        name: 'Food',
        balance: 100,
        date: '09-09-01',
    },
    {
        key: 9,
        name: 'Food',
        balance: 100,
        date: '09-09-01',
    },
    {
        key: 10,
        name: 'Food',
        balance: 100,
        date: '09-09-01',
    },
    {
        key: 11,
        name: 'Food',
        balance: 100,
        date: '09-09-01',
    },
    {
        key: 12,
        name: 'Food',
        balance: 100,
        date: '09-09-01',
    },
    {
        key: 13,
        name: 'Food',
        balance: 100,
        date: '09-09-01',
    },
    ]);
    
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
      }, [itemsPerPage]);

    return (
        <DataTable className='gap-1 pt-6'>
            <View>
                <DataTable.Header>
                    <DataTable.Title>TRANSACTION</DataTable.Title>
                    <DataTable.Title numeric>BALANCE</DataTable.Title>
                    <DataTable.Title numeric>DATE</DataTable.Title>
                </DataTable.Header>

                {items.slice(from, to).map((item) => (
                    <DataTable.Row key={item.key}>
                    <DataTable.Cell>{item.name}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.balance}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.date}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </View>

            <View>
                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(items.length / itemsPerPage)}
                    onPageChange={(page) => setPage(page)}
                    label={`${from + 1}-${to} of ${items.length}`}
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    showFastPaginationControls
                    selectPageDropdownLabel={'Rows per page'}
                />
            </View>
        </DataTable>
    )
}



export default Balance;