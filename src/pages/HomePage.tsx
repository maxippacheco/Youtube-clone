import { YoutubeLayout } from '../layouts';
import { VideosCard, VideoList } from '../components/videos';

export const HomePage = () => {
	return (
		<YoutubeLayout>
			<VideoList>
					<VideosCard />
					<VideosCard />

					<VideosCard />
					<VideosCard />
					<VideosCard />
					<VideosCard />
					<VideosCard />
					<VideosCard />
					<VideosCard />
					<VideosCard />
					<VideosCard />
					<VideosCard />
			</VideoList>
			
		</YoutubeLayout>
	)
}
