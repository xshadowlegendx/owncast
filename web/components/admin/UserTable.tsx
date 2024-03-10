import { Table } from 'antd';
import { format } from 'date-fns';
import { SortOrder } from 'antd/lib/table/interface';
import { FC } from 'react';
import { User } from '../../types/chat';
import { UserPopover } from './UserPopover';
import { BanUserButton } from './BanUserButton';

export function formatDisplayDate(date: string | Date) {
  const d = new Date(date);
  if (d.getFullYear() !== new Date().getFullYear()) {
    return format(new Date(date), 'MMM d, yyyy H:mma');
  }

  return format(new Date(date), 'MMM d H:mma');
}

export type UserTableProps = {
  data: User[];
};

export const UserTable: FC<UserTableProps> = ({ data }) => {
  const columns = [
    {
      title: 'Last Known Display Name',
      dataIndex: 'displayName',
      key: 'displayName',
      // eslint-disable-next-line react/destructuring-assignment
      render: (displayName: string, user: User) => (
        <UserPopover user={user}>
          <span className="display-name">{displayName}</span>
        </UserPopover>
      ),
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => formatDisplayDate(date),
      sorter: (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      sortDirections: ['descend', 'ascend'] as SortOrder[],
    },
    {
      title: 'Disabled at',
      dataIndex: 'disabledAt',
      key: 'disabledAt',
      defaultSortOrder: 'descend' as SortOrder,
      render: (date: Date) => (date ? formatDisplayDate(date) : null),
      sorter: (a: any, b: any) =>
        new Date(a.disabledAt).getTime() - new Date(b.disabledAt).getTime(),
      sortDirections: ['descend', 'ascend'] as SortOrder[],
    },
    {
      title: '',
      key: 'block',
      className: 'actions-col',
      render: (_, user) => <BanUserButton user={user} isEnabled={!user.disabledAt} />,
    },
  ];

  return (
    <Table
      pagination={{ hideOnSinglePage: true }}
      className="table-container"
      columns={columns}
      dataSource={data}
      size="small"
      rowKey="id"
    />
  );
};
