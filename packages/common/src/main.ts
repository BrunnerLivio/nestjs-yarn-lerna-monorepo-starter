import { Module, Injectable } from '@nestjs/common';

@Injectable()
class CommonProvider {
    doSomething() {
        return 'hello';
    }
}

@Module({
    providers: [CommonProvider]    
})
export class CommonModule {

}
