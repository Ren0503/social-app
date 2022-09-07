import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { NotificationsModule } from './notifications/notifications.module';
import { VotesModule } from './votes/votes.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [UsersModule, PostsModule, CommentsModule, NotificationsModule, VotesModule, TopicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
