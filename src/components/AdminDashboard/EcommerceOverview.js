import PropTypes from 'prop-types';
// @mui
import { Card, CardHeader, Typography, Stack, LinearProgress } from '@mui/material';
// utils
import { fPercent, fCurrency } from '../../utils/formatNumber';
// _mock_
// ----------------------------------------------------------------------

const _ecommerceOverview = [...Array(3)].map((_, index) => ({
  label: ['Total Profit', 'Total Income', 'Total Expenses'][index],
  amount: 200,
  value: 10,
}));

export default function EcommerceOverview() {
  return (
    <Card>
      <CardHeader title="Sales Overview" />
      <Stack spacing={4} sx={{ p: 3 }}>
        {_ecommerceOverview.map((progress) => (
          <ProgressItem key={progress.label} progress={progress} />
        ))}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    amount: PropTypes.number,
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
          {progress.label}
        </Typography>
        <Typography variant="subtitle2">{fCurrency(progress.amount)}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          &nbsp;({fPercent(progress.value)})
        </Typography>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={progress.value}
        color={
          (progress.label === 'Total Income' && 'info') ||
          (progress.label === 'Total Expenses' && 'warning') ||
          'primary'
        }
      />
    </Stack>
  );
}
