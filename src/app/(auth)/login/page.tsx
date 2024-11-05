import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function page() {
    return (
        <Tabs defaultValue='student' className='w-[400px] my-auto mx-2 mt-6'>
            <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='student'>Student </TabsTrigger>
                <TabsTrigger value='teacher'>Teacher </TabsTrigger>
            </TabsList>
            <TabsContent value='student'>
                <Card>
                    <CardHeader>
                        <CardTitle>Student Login</CardTitle>
                        <CardDescription>
                            Login with your student credentials.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                        <div className='space-y-1'>
                            <Label htmlFor='student-email'>Email</Label>
                            <Input id='student-email' type='email' />
                        </div>
                        <div className='space-y-1'>
                            <Label htmlFor='student-password'>Password</Label>
                            <Input id='student-password' />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Login</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value='teacher'>
                <Card>
                    <CardHeader>
                        <CardTitle>Teacher Login</CardTitle>
                        <CardDescription>
                            Do not attempt to login if you are not a teacher.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                        <div className='space-y-1'>
                            <Label htmlFor='teacher-email'>Email</Label>
                            <Input id='teacher-email' type='email' />
                        </div>
                        <div className='space-y-1'>
                            <Label htmlFor='teacher-password'>Password</Label>
                            <Input id='teacher-password' type='password' />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Login</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
