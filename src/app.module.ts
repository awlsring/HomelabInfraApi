import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { KasaModule } from './kasa/kasa.module';
// import { MachinesController } from './machines/machines.controller';
// import { SystemstatsService } from './systemstats/systemstats.service';
// import { SystemstatsModule } from './systemstats/systemstats.module';

@Module({
  // imports: [MachinesModule, ProxmoxModule, UnifiModule, KasaModule],
  imports: [
    // ProxmoxModule.register({
    //   username: '',
    //   password: '',
    //   endpoint: '',
    // }),
    // KasaModule.register({
    //   endpoint: '',
    // }),
    // SystemstatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
