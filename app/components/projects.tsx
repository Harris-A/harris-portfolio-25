import {Card, CardBody, CardHeader, Image} from "@heroui/react";

export default function Projects() {
    return (
        <>
            <div className="grid md:grid-cols-4 gap-4 xs:grid-cols-1">
                <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold text-zinc-300">Card one</p>
                        {/*<small className="text-default-500 text-zinc-300">12 Tracks</small>*/}
                        <h4 className="font-bold text-large text-zinc-300">Project one</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="project-img object-cover rounded-xl"
                            src="https://heroui.com/images/hero-card-complete.jpeg"
                            width={270}
                        />
                    </CardBody>
                </Card>

                <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold text-zinc-300">Card two</p>
                        {/*<small className="text-default-500 text-zinc-300">12 Tracks</small>*/}
                        <h4 className="font-bold text-large text-zinc-300">Project two</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="project-img object-cover rounded-xl"
                            src="https://heroui.com/images/hero-card-complete.jpeg"
                            width={270}
                        />
                    </CardBody>
                </Card>

                <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold text-zinc-300">Card Three</p>
                        {/*<small className="text-default-500 text-zinc-300">12 Tracks</small>*/}
                        <h4 className="font-bold text-large text-zinc-300">Project three</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="project-img object-cover rounded-xl"
                            src="https://heroui.com/images/hero-card-complete.jpeg"
                            width={270}
                        />
                    </CardBody>
                </Card>

                <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold text-zinc-300">Card Four</p>
                        {/*<small className="text-default-500 text-zinc-300">12 Tracks</small>*/}
                        <h4 className="font-bold text-large text-zinc-300">Project Four</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="project-img object-cover rounded-xl"
                            src="https://heroui.com/images/hero-card-complete.jpeg"
                            width={270}
                        />
                    </CardBody>
                </Card>

            </div>
        </>
    );
}
