// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Table,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  Typography,
  TableContainer,
} from '@mui/material';
// utils
import { fCurrency } from '../../utils/formatNumber';
// _mock_
// components
// import Label from '../../../../components/Label';
import Scrollbar from '../Scrollbar';
import Label from './Label';
// import Scrollbar from '../../../../components/Scrollbar';

// ----------------------------------------------------------------------

const _ecommerceBestSalesman = [...Array(5)].map((_, index) => ({
  id: "vchcgh5454",
  name: "Dinindu",
  email: "dinindu@gmail.com",
  avatar: "",
  total: "100",
  rank: `Top ${index + 1}`,
}));

export default function EcommerceBestPromoters() {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title="Best Promoters" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Seller</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Total</TableCell>
                <TableCell align="right">Rank</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {_ecommerceBestSalesman.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar alt={row.name} src={row.avatar} />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle2"> {row.name}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {row.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  {/* <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <Image src={row.flag} alt="country flag" sx={{ maxWidth: 28 }} />
                  </TableCell> */}
                  <TableCell>{fCurrency(row.total)}</TableCell>
                  <TableCell align="right">
                    <Label
                      variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                      color={
                        (row.rank === 'Top 1' && 'primary') ||
                        (row.rank === 'Top 2' && 'info') ||
                        (row.rank === 'Top 3' && 'success') ||
                        (row.rank === 'Top 4' && 'warning') ||
                        'error'
                      }
                    >
                      {row.rank}
                    </Label>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  );
}
