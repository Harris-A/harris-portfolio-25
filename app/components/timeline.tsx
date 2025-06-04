import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {timelineOppositeContentClasses,} from '@mui/lab/TimelineOppositeContent';

export default function AlternateTimeline() {
    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}
        >
            <TimelineItem>
                <TimelineOppositeContent className="text-zinc-400">Sept 2024 - Present</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="text-green-500">
                    Gtech (Grey Technology)
                    <p className="text-zinc-300 text-md">Front-end Developer</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent className="text-zinc-400">May 2024 - Aug 2024</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="text-green-500">
                    Nvisage
                    <p className="text-zinc-300 text-md">Magento Developer (Freelance)</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent className="text-zinc-400">Dec 2022 - May 2024</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="text-green-500">
                    Numagoo Ltd
                    <p className="text-zinc-300 text-md">Magento Front-end Developer</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent className="text-zinc-400">Feb 2019 - Dec 2022</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="text-green-500">
                    OGL Software
                    <p className="text-zinc-300 text-md">Web Developer</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent className="text-zinc-400">Jan 2018 - Dec 2018</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent className="text-green-500">
                    Web and Apps Solutions
                    <p className="text-zinc-300 text-md">Website and Graphic Designer</p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}