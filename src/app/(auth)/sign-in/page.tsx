"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                className={cn(
                    "h-full w-full rounded-full bg-gradient-to-b opacity-80",
                    gradient
                )}
                style={{
                    width: width + "px",
                    height: height + "px",
                }}
            />
        </motion.div>
    );
}

const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.5 + delay * 0.1,
        },
    }),
};

export default function SignIn() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-300/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-300/[0.15]"
                    className="right-[-10%] md:right-[-5%] top-[45%] md:top-[50%]"
                />
            </div>

            <Link 
                href="/"
                className="fixed top-8 left-8 text-white/80 hover:text-white flex items-center gap-2 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
            </Link>

            <div className="relative z-10 w-full max-w-md px-6">
                <div className="text-center space-y-6">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="space-y-2"
                    >
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                            Hello there!
                        </h1>
                        <p className="text-white/80">
                            Join us to experience AI-powered inbox management
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full bg-white/[0.05] border-white/10 text-white hover:bg-white/[0.1] hover:border-white/20"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Continue with Google
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
