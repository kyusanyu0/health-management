import React from 'react';
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import dayjs, { Dayjs } from 'dayjs';
import format from 'date-fns/format';
function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}
//   グラフコード
const chartSetting = {
    yAxis: [
        {
            label: '健康グラフ',
        },
    ],
    width: 700,
    height: 500,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
};
const dataset = [
    {
        london: 59,
        paris: 57,
        newYork: 86,
        seoul: 21,
        month: 'Jan',
    },
    {
        london: 50,
        paris: 52,
        newYork: 78,
        seoul: 28,
        month: 'Fev',
    },
    {
        london: 47,
        paris: 53,
        newYork: 106,
        seoul: 41,
        month: 'Mar',
    },
    {
        london: 54,
        paris: 56,
        newYork: 92,
        seoul: 73,
        month: 'Apr',
    },
    {
        london: 57,
        paris: 69,
        newYork: 92,
        seoul: 99,
        month: 'May',
    },
    {
        london: 60,
        paris: 63,
        newYork: 103,
        seoul: 144,
        month: 'June',
    },
    {
        london: 59,
        paris: 60,
        newYork: 105,
        seoul: 319,
        month: 'July',
    },
    {
        london: 65,
        paris: 60,
        newYork: 106,
        seoul: 249,
        month: 'Aug',
    },
    {
        london: 51,
        paris: 51,
        newYork: 95,
        seoul: 131,
        month: 'Sept',
    },
    {
        london: 60,
        paris: 65,
        newYork: 97,
        seoul: 55,
        month: 'Oct',
    },
    {
        london: 67,
        paris: 64,
        newYork: 76,
        seoul: 48,
        month: 'Nov',
    },
    {
        london: 61,
        paris: 70,
        newYork: 103,
        seoul: 25,
        month: 'Dec',
    },
];
const valueFormatter = (value) => `${value}mm`;

const HealthRegister = () => {
    const navigate = useNavigate();
    const calendarBack = () => {
        navigate(`/calendar`);
    };
    const sentData = () => {
        console.log("sent data:")
        var data = [{ "date": date.$d }, { "healthInfo": healthInfo }, { "valueText": valueText }];
        console.log(data);

    };
    const [healthInfo, setHealthInfo] = React.useState(10);

    const changeSelectHealthInfo = (event) => {
        setHealthInfo(event.target.value);
    };
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    // 日付取得
    const [date, setDate] = React.useState(dayjs('2022-04-17'));
    // テキスト取得
    const [valueText, setValueText] = React.useState("");
    const handleValueText = (event) => {
        setValueText(event.target.value);
    }

    return (
        <>
            <header className="px-4 py-2 flex items-center">
                <h1 className="mr-10 text-xl text-gray-500 fond-bold">健康記録機能</h1>
                <button onClick={calendarBack} className="border rounded py-2 px-4 mr-5">
                    ホーム
                </button>
                <button onClick={calendarBack} className="border rounded py-2 px-4 mr-5">
                    体型管理機能
                </button>
                <button onClick={calendarBack} className="border rounded py-2 px-4 mr-5">
                    診断機能
                </button>
            </header>
            <div className="border-2 border-indigo-600 flex items-center h-56" style={{ overflow: 'scroll', height: '300px' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
                        <TableHead className='sticky'>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">年月日</TableCell>
                                <TableCell align="right">体重&nbsp;(g)</TableCell>
                                <TableCell align="right">睡眠&nbsp;()</TableCell>
                                <TableCell align="right">血圧&nbsp;()</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className="border-2 border-indigo-600 flex items-center justify-around">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker value={date}
                        format="YYYY/MM/DD"
                        onChange={(newValue) => setDate(newValue)} defaultValue={dayjs('2023-04-17')} />
                </LocalizationProvider>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={healthInfo}
                            label="健康情報"
                            onChange={changeSelectHealthInfo}
                            autoWidth="true"
                        >
                            <MenuItem value={10}>体重</MenuItem>
                            <MenuItem value={20}>睡眠</MenuItem>
                            <MenuItem value={30}>低血圧</MenuItem>
                            <MenuItem value={40}>高血圧</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '500px' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="体重/睡眠/血圧の数値を入力" variant="outlined" value={valueText} onChange={handleValueText} />
                </Box>
                <Box> <AddCircleIcon className="cursor-pointer" sx={{ fontSize: 40 }} color="primary" onClick={sentData} /></Box>
            </div>
            <div className="border-2 border-indigo-600 flex items-center justify-around h-4/5">

                <BarChart
                    dataset={dataset}
                    xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                    series={[
                        { dataKey: 'london', label: '体重', valueFormatter },
                        { dataKey: 'paris', label: '睡眠', valueFormatter },
                        { dataKey: 'newYork', label: '低血圧', valueFormatter },
                        { dataKey: 'seoul', label: '高血圧', valueFormatter },
                    ]}
                    {...chartSetting}
                />

            </div>

        </>
    );
};

export default HealthRegister;