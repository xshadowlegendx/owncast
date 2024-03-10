import { Table, Button } from 'antd';
import { SortOrder } from 'antd/lib/table/interface';
import { format } from 'date-fns';
import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { User } from '../../types/chat';
import { BANNED_IP_REMOVE, fetchData } from '../../utils/apis';

// Lazy loaded components

const StopTwoTone = dynamic(() => import('@ant-design/icons/StopTwoTone'), {
  ssr: false,
});

function formatDisplayDate(date: string | Date) {
  return format(new Date(date), 'MMM d H:mma');
}

async function removeIPAddressBan(ipAddress: String) {
  try {
    await fetchData(BANNED_IP_REMOVE, {
      data: { value: ipAddress },
      method: 'POST',
      auth: true,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

export type UserTableProps = {
  data: User[];
};

export const BannedIPsTable: FC<UserTableProps> = ({ data }) => {
  const columns = [
    {
      title: 'IP Address',
      dataIndex: 'ipAddress',
      key: 'ipAddress',
    },
    {
      title: 'Reason',
      dataIndex: 'notes',
      key: 'notes',
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
      title: '',
      key: 'block',
      className: 'actions-col',
      render: (_, ip) => (
        <Button
          title="Remove IP Address Ban"
          onClick={() => removeIPAddressBan(ip.ipAddress)}
          icon={<StopTwoTone twoToneColor="#ff4d4f" />}
          className="block-user-button"
        />
      ),
    },
  ];

  return (
    <Table
      pagination={{ hideOnSinglePage: true }}
      className="table-container"
      columns={columns}
      dataSource={data}
      size="large"
      rowKey="ipAddress"
    />
  );
};
