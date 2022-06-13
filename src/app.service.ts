import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { map } from 'rxjs'
import { ICommit } from './common/interfaces/ICommit'

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  getCommits(page: number, limit: number) {
    return this.httpService
      .get('https://api.github.com/repos/facebook/react/commits', {
        params: {
          page,
          per_page: limit,
        },
      })
      .pipe(map((data) => data.data.map(this.filterData.bind(this))))
  }

  private filterData(data: ICommit) {
    const { commit, html_url, sha } = data
    return {
      sha,
      commit: { message: commit.message, committer: commit.committer },

      html_url,
    }
  }
}
