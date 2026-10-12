import React from "react";
import { Card, CardContent, Skeleton } from "@mui/material";
export default function MovieCardSkeleton() { return <Card sx={{ height: "100%", borderRadius: 3, bgcolor: "background.paper" }}><Skeleton variant="rectangular" animation="wave" sx={{ width: "100%", aspectRatio: "2 / 3" }} /><CardContent><Skeleton variant="text" width="80%" height={35} /><Skeleton variant="text" width="40%" height={22} /></CardContent></Card>; }
