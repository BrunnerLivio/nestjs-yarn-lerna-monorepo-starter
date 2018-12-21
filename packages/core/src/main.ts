import { Module } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage } from '@nestjs/websockets';

@WebSocketGateway(3001, { namespace: 'events' })
class MySocket {
    @SubscribeMessage('events')
    onEvent(client, data: string): string {
        return data;
    }
}

@Module({
    providers: [MySocket]
})
export class ApplicationModule { }
